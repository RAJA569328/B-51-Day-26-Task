import React from 'react'

function CyberSecurity({CyberSecurityCourse}) {
    let Course = CyberSecurityCourse;
  return (
    <>
    <div  className="row row-cols-4 row-cols-md-4 g-4">
        { Course.map((Value,index)=>{
                return      <div className="col " key={index}>
                                <div className="card h-100">
                                    <img src={Value.img} className="card-img-top" alt={Value.CourseName}/>
                                    <div className="card-body">
                                        <h5 className="card-title">{Value.CourseName}</h5>
                                    </div>
                                </div>
                            </div>
            })
        }
    </div>
    </>
  )
}

export default CyberSecurity