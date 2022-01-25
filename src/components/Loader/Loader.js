import { css } from '@emotion/react';
import PuffLoader from 'react-spinners/PuffLoader';

const override = css`
  display: block;
  margin: 0 auto;
  margin-top: 100px;
`;

export default function Loader() {
  return <PuffLoader color="#4f95da" size={150} css={override} />;
}
