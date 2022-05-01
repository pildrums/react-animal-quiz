import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import theme from 'theme';
import { QUIZ } from 'constants';
import Main from 'pages/Main';
import Quiz from 'pages/Quiz';
import Loading from 'pages/Loading';
import Result from 'pages/Result';

const App = () => {
  const [score, setScore] = useState(0);
  const totalScore = Math.floor((score / QUIZ.length) * 100);
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>애니멀 퀴즈 온 더 블록</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/quiz" element={<Quiz setScore={setScore} />} />
        <Route path="/loading" element={<Loading totalScore={totalScore} />} />
        <Route
          path="/result"
          element={<Result totalScore={totalScore} setScore={setScore} />}
        />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
