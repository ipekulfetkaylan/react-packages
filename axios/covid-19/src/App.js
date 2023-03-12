import React,{useEffect, useState} from 'react';
import axios from 'axios';
function App() {

  const [veri, setVeri] = useState();
  const [tarih,setTarih] = useState(); 

  //anlık bir değişim olacağı için useEffect kullandık. useEffectin çalışabilmesi için onChange metodunu da input içine yerleştirmeliyiz ki bir değişim olduğu anlaşılsın
  useEffect(() =>{
    axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
    .then(res => setVeri(res.data[tarih]));
  }, [veri, tarih])




  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto mt-5">
            <h2 className="text-white text-center display-4">Türkiye Covid-19 Arama Motoru</h2>
            <input type="text" placeholder="GG/AA/YY" className="form-control mt-4" onChange={(e)=> setTarih(e.target.value)}></input>
            <table className="table table-striped text-white">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Test Sayısı</th>
                  <th scope="col">Hasta Sayısı</th>
                  <th scope="col">Vefat Sayısı</th>
                </tr>
              </thead>
              <tbody >
                <tr  className={veri === undefined ? 'bg-danger' : 'bg-success'}>
                  <th  className={"text-white" } scope="row">{veri === undefined ? "veri bekleniyor" : veri.date}</th>
                  <td  className="text-white">{veri === undefined ? "veri bekleniyor" : veri.totalTests}</td>
                  <td  className="text-white">{veri === undefined ? "veri bekleniyor" : veri.patients}</td>
                  <td  className="text-white">{veri === undefined ? "veri bekleniyor" : veri.deaths}</td>
                </tr>
              </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
