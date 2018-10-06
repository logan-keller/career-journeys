import css from 'styled-jsx/css';

const styles = css`
  .root {
    display: flex;
  }

  .root > :global(*) {
    margin: 0 2.4rem;
  }
`;

export default styles;
