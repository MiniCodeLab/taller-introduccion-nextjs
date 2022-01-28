// /streamers/[id] => /streamers/minicodelab, /streamers/ibai, /streamers/xokas ...
const StreamersName = ({ streamer }) => {
  return (
    <div>
      <h1>{streamer.name} Page 👾!</h1>

      <a href={streamer.canal} target="_blank" rel="noopener noreferrer">
        Link al canal
      </a>
    </div>
  );
};

// Como estamos haciendo SSG, debemos quitar getServerSideProps
// export const getServerSideProps = async (ctx) => {
//   console.log('SSR', ctx.params.id);

//   const streamer = await (
//     await fetch(`http://localhost:8080/streamers/${ctx.params.id}`)
//   ).json();

//   return {
//     props: {
//       streamer,
//     },
//   };
// };

export const getStaticPaths = async () => {
  const streamers = await (
    await fetch('http://localhost:8080/streamers')
  ).json();

  // Creamos un array de rutas que esperamos => /streamers/[id]
  const paths = streamers.map((streamer) => `/streamers/${streamer._id}`);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const streamer = await (
    await fetch(`http://localhost:8080/streamers/${ctx.params.id}`)
  ).json();

  return {
    props: {
      streamer,
    },
    // La página estática se regenerará cada 10 segundos
    revalidate: 10,
  };
};

export default StreamersName;
