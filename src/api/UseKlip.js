import axios from "axios"; // axios는 외부와 통신을 하기위한 ( restful api ) 라이브러리임

const A2P_API_PREPATE_URL = "https://a2a-api.klipwallet.com/v2/a2a/prepare";
const APP_NAME = "BV_DAPP";

const getKlipAccessUrl = (method, request_key) => {
  return `kakaotalk://klipwallet/open?url=https://klipwallet.com/?target=/a2a?request_key=${request_key}`;
};

export const getAddress = (callback) => {
  axios
    .post(A2P_API_PREPATE_URL, {
      bapp: {
        name: APP_NAME,
      },
      type: "auth",
    })
    .then((response) => {
      const { request_key } = response.data;
      window.location.href = getKlipAccessUrl("android", request_key);

      let timerId = setInterval(() => {
        axios
          .get(
            `https://a2a-api.klipwallet.com/v2/a2a/result?request_key=${request_key}`
          )
          .then((res) => {
            if (res.data.result) {
              console.log(`[Result] ${JSON.stringify(res.data.result)}`);
              callback(res.data.result.klaytn_address);
              clearInterval(timerId);
            }
          });
      }, 1000);
    });
};

// export const getAddress = (setQrvalue, callback) => {
//   // callback : 이 작업을 한뒤 콜백함수를 실행해줘라는 뜻으로 다음 작업을 하기 위한 함수
//   axios
//     .post(A2P_API_PREPATE_URL, {
//       // klip api tutorial 참조할것
//       bapp: {
//         name: APP_NAME,
//       },
//       type: "auth",
//     })
//     .then((response) => {
//       // then : 위 함수를 실행하고 결과를 response에 담아 달라는 뜻
//       // const  request_key  = response.data.request_key // 아래 문장과 같은 의미
//       const { request_key } = response.data;

//       if (isMoblie) {
//         window.location.href = getKlipAccessUrl("android", request_key);
//       } else {
//         setQrvalue(getKlipAccessUrl("QR", request_key));
//       }

//       let timerId = setInterval(() => {
//         // setInterval : 이 안의 함수를 일정 주기로 실행해달라는 뜻 (여기서는 1초에 한번씩 실행하도록 했음)
//         axios
//           .get(
//             `https://a2a-api.klipwallet.com/v2/a2a/result?request_key=${request_key}`
//           )
//           .then((res) => {
//             if (res.data.result) {
//               console.log(`[Result] ${JSON.stringify(res.data.result)}`); // JSON.stringify : 값을 다 볼수있게 쫙 펼쳐준다
//               callback(res.data.result.klaytn_address);
//               clearInterval(timerId);
//               setQrvalue("DEFAULT");
//             }
//           });
//       }, 1000);
//     });
// };
