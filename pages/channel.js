import Link  from 'next/link'
import 'isomorphic-fetch'
import Layout from '../components/Layout'
import ChannelGrid from '../components/ChannelGrid'
import PodcastList from '../components/PodcastList'
import Error from './_error'

export default class extends React.Component {
  
  static async getInitialProps({ query, res }) {
    let idChannel = query.id

      try{
        let [reqChannel, reqAudios, reqSeries] = await Promise.all([
          fetch(`https://api.audioboom.com/channels/${idChannel}`),
          fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`),
          fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`)
        ])

        if (reqChannel.status >= 400){
          res.statusCode = reqChannel.status
          return { channel: null, audioClips: null, series: null, statusCode: reqChannel.status}
        }

        let dataChannel = await reqChannel.json()
        let channel = dataChannel.body.channel

        let dataAudio = await reqAudios.json()
        let audioClips = dataAudio.body.audio_clips

        let dataSeries = await reqSeries.json()
        let series = dataSeries.body.channels

        return { channel, audioClips, series, statusCode: 200 }

    } catch (e){
        return { channel: null, audioClips: null, series: null, statusCode: 503}
    }
  }
  
  render(){
    const { channel, audioClips, series, statusCode } = this.props
    
    if(statusCode !== 200)
      return <Error statusCode={ statusCode } />

    return (
      <Layout title={ channel.title }>
        <div className="banner" style={{ backgroundImage: `url(${channel.urls.banner_image.original})` }} />
        { series.length > 0 &&
          <ChannelGrid channels={ series }/>
        }
        
        <h2>Ultimos Podcasts</h2>
        <PodcastList audioClips={ audioClips }/>

        <style jsx>{`
          .banner {
            width: 100%;
            padding-bottom: 25%;
            background-position: 50% 50%;
            background-size: cover;
            background-color: #aaa;
          }

          h2 {
            padding: 5px;
            font-size: 0.9em;
            font-weight: 600;
            margin: 0;
            text-align: center;
          }

          
        `}</style>

      </Layout>
    )
  }
}