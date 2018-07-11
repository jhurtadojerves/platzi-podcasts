export default class extends React.Component {
  render() {
    return <div>
      <h1> Hola Platzi! </h1>
      <p>Bienvenidos al curso de Next.Js</p>

      <style jsx>{`
        h1 {
          color: red;
        }
        :global(p) {
          color: green;
        }
      `}</style>

        <style jsx global>{`
          body {
            background: yellow;
          }
        `}</style>

    </div>
  }
}