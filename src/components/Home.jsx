import React from 'react'
import dmm from '../images/Home.jpg'
import app1 from '../images/app1.png'
import manga from '../images/manga.png'
import servers from '../images/servers.png'

const Home = () => {
  return (
    <div className='home'>
        <div className="banner">
          <h1>ماهو بيطابوت</h1>
        </div>
        <div className="info">
          <div className="what">
            <br />

            <div className="item">
            <p>أول تطبيق سطح مكتب لمشاهدة الانمي المترجم
              
              </p>
              <img className='right' src={app1} alt="" />

            </div>
            <br />
            <br />
            <div className="item">
            <img className='left' src={manga} alt="" />
            <p>
              يوفّر بيطابوت ايضا اخر المانغات المترجمة
              </p>
              

            </div>
            <br /><br />

            <div className="item">
            <p>
                كل هذا عن طريق أكثر من 10 سيرفرات للمشاهدة والقراءة
              
              </p>
              <img className='right' src={servers} alt="" />

            </div>
            <br />
            <h1>حمل بيطابوت الان</h1>
            <div className='btn_grp'>
             <button>حمل الان</button>
             <button>دليل المستخدم</button>


            </div>
            
            <br />
            
            <br />
          </div>
        </div>
        

    </div>
  )
}

export default Home