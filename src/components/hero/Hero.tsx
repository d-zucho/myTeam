const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero__container'>
        <div className='hero__content hero-left'>
          <h1>
            Find the best <span className='talent'>talent</span>
          </h1>
        </div>
        <div className='hero__content hero-right'>
          <p className='hero__content__description'>
            Finding the right people and building high performing teams can be
            hard. Most companies aren't tapping into the abundance of global
            talent. We're about to change that.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
