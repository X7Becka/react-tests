import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {CustomButton} from 'components/buttons/custom-button'
import {RouteComponentProps} from 'react-router'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/swiper.scss'

class Menu extends React.PureComponent<RouteComponentProps> {
    private _urls: Array<{
        url: string
        label: string
    }>

    constructor(props: RouteComponentProps) {
        super(props)
        this._urls = [
            {url: '/github-repos', label: 'Работа с апи гитхаба'},
            {url: '/math', label: 'Математический тест'},
            {url: '/itunes', label: 'Itunes products'}
        ]
    }

    SWIPER_PROPS = {
        className: 'menu__swiper',

        breakpoints: {
            425: {
                slidesPerView: 1,
                spaceBetween: 8
            },
            625: {
                slidesPerView: 3,
                spaceBetween: 8
                // centeredSlides: false
            },
            960: {
                slidesPerView: 4,
                // centeredSlides: true
                spaceBetween: 12
            },
            1199: {
                //slidesPerView: 'auto' as 'auto', // WUT?!?!?!?!
                slidesPerView: 6,
                spaceBetween: 24,
            }
        }
    }

    render(): JSX.Element {
        return (
            <div className="menu">
                <div className="menu__links-wrapper">
                    <Swiper {...this.SWIPER_PROPS}>
                        {this.buttons}
                    </Swiper>
                </div>
            </div>
        )
    }

    get buttons(): JSX.Element[] {
        return this._urls.map((item, i) => {
            return (
                <SwiperSlide key={i}>
                    <CustomButton
                              className="menu__button menu__swiper-slide"
                              component={Link}
                              to={item.url}
                              disabled={this.props.location.pathname.includes(item.url)}
                    >
                        {item.label}
                    </CustomButton>
                </SwiperSlide>
            )
        })
    }
}

export default withRouter(Menu)
