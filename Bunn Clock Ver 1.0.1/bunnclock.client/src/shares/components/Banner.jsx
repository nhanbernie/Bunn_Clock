
import banner from "@images/banner.png"
import "@styles/components/Banner.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

function Banner() {
  return (
    <div>
      <div className='up-down-banner'>
        <img src={banner} alt="Character" className="img-banner" />
      </div>
    </div>
  )
}

export default Banner