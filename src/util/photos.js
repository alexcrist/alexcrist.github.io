import React from 'react';
import _ from 'lodash';

const rawPhotos = {
  alexLookingDown: 'https://lh3.googleusercontent.com/aXcwJJW9-3hi_xIOY0R6PnjLPTzNQprufTFx-fXUbytOI3dWt_TeLC9zU7sOi5C_eQQcxmRmT9EDF-clWqoaXY5muzg1SIFfpv903wsCTFygsJlyTFv430MNfFouOhSEwSkDknwUEIw=w2400',
  alexAndHaley: 'https://lh3.googleusercontent.com/UpHDVpPoV2-rG1CsDG_HHXj7A59aLnVaLMAHLWwXWkBmpS2G7oY9DdjuvtIx7tt1mTajvxExMtAbuIQitpIuEKeJTvmbUPRQJK_u7JPTtHxApSkV7TeYxkbVPjV7dG-2GA4c5UlgDW8=w2400',
  carlin: 'https://lh3.googleusercontent.com/Iae8_Hx2JJMgc1n7po9grunEpsQmHEl1MqxnjBGyMNBx4SgulM7wsoNBIMFPCCbxqN8mnWobF6J0wJ9NyDId0Q-9k8znUNdEHAYgHxeGPn4KWxd0JX1hY_INfbOVlCn8hmeL-Ls_qQA=w2400',
  alexAndMom: 'https://lh3.googleusercontent.com/JvZCzoFwnNyJ_lIUjFwgJwbDzUk4vxCgXROA9ZQNYw4qbai07CMmPvQvCRK1lzui7EhEjsEbofj8egbIawGemqxgled1bEP32Tm2DXDkN9sO7LokuX_V8W0X4uychvEMe1LhGD3MnrI=w2400',
  danaInFog: 'https://lh3.googleusercontent.com/yVFKAeOTlhxPeziFC94qGUIg7P1eN1M4FHRxK5iuVdhzVs5c9jtKnBEZAbxy3Kmb84O30aQtpNghfpbQgJVYoA2wZP1XAFuQp4UE1f_CnFBaymG27errKDeFb4WYbPJHuQVT-MpO0eI=w2400',
};

let photos = {};
_.forOwn(rawPhotos, (value, key) => {
  photos[key] = <img className='photo' src={value} />;
});

export const urlsToImages = urls => {
  return _.map(urls, url => {
    return <img className='photo' src={url} />;
  });
};

export default photos;
