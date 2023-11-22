import AppRouter from './components/AppRouter'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import { Context } from '.';
import { check } from './http/userApi';
import { Spinner } from 'react-bootstrap';
import { fetchBrands, fetchDevices, fetchTypes } from './http/deviceAPI';

const App = observer(() => {
  const { device } = useContext(Context)
  const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   fetchTypes().then(data => device.setTypes(data))
  //   fetchBrands().then(data => device.setBrands(data))
  //   fetchDevices(2, 2, 1, 3).then(data => {
  //     device.setDevices(data.rows)
  //     device.setTotalCount(data.count)
  //   })
  // }, []);
  // useEffect(() => {
  //   check().then(data => {
  //     user.setUser(true)
  //     user.setIsAuth(true)
  //   }).finally(()=>setLoading(false))
  // }, []);
  useEffect(() => {
    check().finally(() => setLoading(false))
  }, []);
  if (loading) {
    return <Spinner animation='grow' />
  }
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}
)
export default App;
