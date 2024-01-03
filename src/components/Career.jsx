import React from 'react'

function Career({data}) {

  return <div className='container'>
    <div className="row row-cols-1 row-cols-md-2 g-4">
        {
            data.map((e,i)=>{
                return e.type==="Career"?  (<div className="col" key={i}>
                    <div className="card h-100">
                    <img src={e.img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{e.content}</h5>
        <p className="card-text">{e.content2}<span className="readmore"><strong>Read more</strong></span></p>
        </div>
        <div className="card-footer">
            <small className="text-body-secondary">{e.date}</small>
          </div>
        </div>
      </div>
                ):""

            })
        }
    </div>
    </div>
}


export default Career