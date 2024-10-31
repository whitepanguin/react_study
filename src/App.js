import { ThemeProvider } from 'styled-components';
import './App.css';
import GlobalStyle from './global/globalStyle';
import theme from './global/theme';
import Styled03 from './pages/docs/_component/Styled03';


function App() {
  return (
    <>
      <ThemeProvider theme={theme} >
        <GlobalStyle/>
        <Styled03/>
      </ThemeProvider>
    </>
  );
}

// 컨트롤 + space 한다음 tab키를 써서 불러오기
// 컨트로 + 클릭으로 빠른 이동
export default App;
