import Link  from 'next/link'
import 'isomorphic-fetch'
import Layout from '../components/Layout'
import ChannelGrid from '../components/ChannelGrid'
import PodcastList from '../components/PodcastList'


export default class extends React.Component {
  
  static async getInitialProps({ query }) {
    let idChannel = query.id

    let [reqChannel, reqAudios, reqSeries] = await Promise.all([
      fetch(`https://api.audioboom.com/channels/${idChannel}`),
      fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`),
      fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`)
    ])

    let dataChannel = await reqChannel.json()
    let channel = dataChannel.body.channel

    let dataAudio = await reqAudios.json()
    let audioClips = dataAudio.body.audio_clips

    let dataSeries = await reqSeries.json()
    let series = dataSeries.body.channels


    return { channel, audioClips, series }
  }
  
  render(){
    const { channel, audioClips, series } = this.props
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