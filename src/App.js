import logo from './img/profile.jpg';
import './App.css';

function App() {
  return (
    <div className="maindiv">
<center>
  <h3>axiom techguru pvt lmt</h3>
<img src={logo} alt="abc" />
    <table >
      <tr><td className='headings'>Full Name :</td><td>Aditya Pohane</td></tr>
      <tr><td className='headings'>Email :</td><td>pohaneaditya123@gmail.com</td></tr>
      <tr><td className='headings'>DOB :</td><td>15/05/2000</td></tr>
      <tr><td className='headings'>Department :</td><td>Software Developer</td></tr>
      <tr><td className='headings'>phone Number :</td><td>0621 235 3445</td></tr>
    <tr><td className='headings'>Address :</td><td>Nagpur,Maharashtra,India</td></tr>
    </table>


</center>
    </div>
  );
}

export default App;
