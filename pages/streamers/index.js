import Link from 'next/link';

// /streamers
const Streamers = (props) => {
  console.log('Client Side Rendering...', props.streamers);

  return (
    <div>
      <h1>Streamers Page!</h1>

      <ul>
        {props.streamers.map((streamer) => (
          <li key={streamer._id}>
            <p>{streamer.name}</p>

            <Link href={`/streamers/${streamer._id}`}>Visita el perfil</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Como estamos haciendo SSG, debemos quitar getServerSideProps
// export const getServerSideProps = async () => {
//   // Esto no corre en el cliente, solo en el server!
//   // console.log('Server Side Rendering...');

//   const streamers = await (
//     await fetch('http://localhost:8080/streamers')
//   ).json();

//   return {
//     props: {
//       streamers,
//     },
//   };
// };

export const getStaticProps = async () => {
  // Esto no corre en el cliente, solo en build time!
  console.log('Static Site Generation...');

  const streamers = await (
    await fetch('http://localhost:8080/streamers')
  ).json();

  return {
    props: {
      streamers,
    },
  };
};

export default Streamers;
