import { ThemeProvider } from 'styled-components';
import './App.css';
import GlobalStyle from './global/globalStyle';
import theme from './global/theme';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';



function App() {
  return (
    <>
        <ThemeProvider theme={theme} >
          <GlobalStyle/>
          <RouterProvider router={router}/>
          
        </ThemeProvider>
    </>
  );
}

// 컨트롤 + space 한다음 tab키를 써서 불러오기
// 컨트로 + 클릭으로 빠른 이동
export default App;
