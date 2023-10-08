import { Navigate, useNavigate, Route, Routes } from 'react-router-dom';

function Post() {
  const status = 200;

  const navigate = useNavigate();

  const onClick = () => {
    navigate('/about');
    // /post adresindeyken click butonuna tıkladığımızda /about adresine yönlendirileceğiz.
  };

  if (status === 404) {
    return <Navigate to='/notfound' />;
  }

  return (
    <div>
      <h1>Post</h1>
      <button onClick={onClick}>Click</button>
      <Routes>
        <Route path='/show' element={<h1>Hello World!</h1>} />
      </Routes>
    </div>
  );
}

export default Post;
