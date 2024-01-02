import "./featuredProperties.css"

const FeaturedProperties = () => {
  return (
    <div className="fp">
        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" alt="" className="fpImg" />
            <span className="fpName">Aparthotel Stare Miasto</span>
            <span className="fpCity">Poland</span>
            <span className="fpPrice"> Starting from Rs.8351</span>
            <div className="fpRating">
                <button>8.7</button>
                <span>Excellent</span>
            </div>
        </div>

        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=c4092495705eab3fad626e8e1a43b1daf7c623e4ea41daf26a201b4417a71709&o=" alt="" className="fpImg" />
            <span className="fpName">Oriente Palace Apartments</span>
            <span className="fpCity">Madrid</span>
            <span className="fpPrice"> Starting from Rs.8061</span>
            <div className="fpRating">
                <button>9.0</button>
                <span>Wonderful</span>
            </div>
        </div>

        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/85257658.webp?k=e3f110e4ed0978310a028465a3bdd609149ecbded601555c881106255556b52e&o=" alt="" className="fpImg" />
            <span className="fpName">Leman Locke</span>
            <span className="fpCity">London</span>
            <span className="fpPrice"> Starting from Rs.21,511</span>
            <div className="fpRating">
                <button>8.2</button>
                <span>Excellent</span>
            </div>
        </div>

        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/29466558.webp?k=7f9cf4736f69b30c20fa7a751bb8711fa195bc9ff6092d5412d52daf6cada17f&o=" alt="" className="fpImg" />
            <span className="fpName">Cheval Three quays at The Tower of London</span>
            <span className="fpCity">London</span>
            <span className="fpPrice"> Starting from Rs.39,047</span>
            <div className="fpRating">
                <button>9.4</button>
                <span>Wonderful</span>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProperties