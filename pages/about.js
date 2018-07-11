export default class extends React.Component {
  render() {
    return (
      <div>
        <img src="/static/react-icon.png" />
        <h1>Creado por Juliens con <text>♥</text> </h1>
        <p>Curso de Next.js de Platzi</p>

        <style jsx>{`
          :global(body) {
            background: #1c3643;
            margin: auto auto;
            width: 50%;
          }
          div {
            align-items: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: auto auto;
            width: 75%;
          }
          @keyframes rotate {from {transform: rotate(0deg);}
            to {transform: rotate(360deg);}}
          img {
            animation: 5s rotate linear infinite;
            margin: auto auto;
            max-width: 50%;
            transform-origin: 50% 50%;
          }
          h1 {
            font-style: italic;
          }
          h1 text {
            color: red;
          }
          p { 
            font-size: 1.5em;
          }
        `}</style>
      </div>
    )
  }
}