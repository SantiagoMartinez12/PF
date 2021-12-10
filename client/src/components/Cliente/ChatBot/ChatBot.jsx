// import React, { useState } from 'react';
// import 'boxicons'
// import ChatBot from 'react-simple-chatbot';
// import { ThemeProvider } from 'styled-components';
// import style from './ChatBot.module.css'

// export default function CBot(){
//     const [chat, setChat] = useState(false)

//     function handleChat(e){
//         if(chat === false){
//             setChat(true)
//         }else{
//             setChat(false)
//         }
//     }

//     const steps = [
//         {
//           id: '0',
//           message: 'Welcome to react chatbot!',
//           trigger: '1',
//         },
//         {
//           id: '1',
//           message: 'Bye!',
//           end: true,
//         },
//       ];
    
//       const theme = {
//         background: '#f5f8fb',
//         fontFamily: 'Helvetica Neue',
//         headerBgColor: '#EF6C00',
//         headerFontColor: '#fff',
//         headerFontSize: '15px',
//         botBubbleColor: '#EF6C00',
//         botFontColor: '#fff',
//         userBubbleColor: '#fff',
//         userFontColor: '#4a4a4a',
//       };

//     return(
//         <div>
//                 <button onClick={(e) => handleChat(e)} className={style.elBoton}>
//                 <box-icon name='chat' animation='burst' ></box-icon>
//                    </button>
//                    {
//                     chat === true ?
//                     <ThemeProvider theme={theme}>
//                         <ChatBot steps={steps} />
//                     </ThemeProvider>  : <></>
//                    }
//         </div>
//     )
// }