import { IAnnouncement } from "../../mocks/auto-vehicles"
import { AuctionArticle, AuctionTime, AuctionText, AuctionFooter, AuctionImage } from "./style"
import {BsClock} from "react-icons/bs"
import { Avatar } from "../Avatar"

interface IAuctionCardsProps{
    announcement: IAnnouncement
}

export const AuctionCards = ({announcement}: IAuctionCardsProps) =>{

    return(

        <AuctionArticle>

                <AuctionImage>
                <img src={announcement.image[0]} alt="car" />
                </AuctionImage>
            <AuctionText>

                
                    <AuctionTime>
                        <BsClock/>
                        <p>TEMP</p>
                    </AuctionTime>
                        <div>
                            <h2>Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200</h2>
                        </div>

                        <div>
                            <p>{announcement.description}</p>
                        </div>

                        <div className="avatar">
                            <Avatar username ={announcement.user.name}/>
                            <p>{announcement.user.name}</p>
                        </div>

                        <div className="price">
                            <div>
                                <p>{announcement.year}</p>
                                <p>{announcement.year}</p>
                            </div>
                            <p>{announcement.price}</p>
                        </div>

                    </AuctionText>
                

            <AuctionFooter>
                <p>Acessar pagina de leilão</p>
                <p>Icone</p>
            </AuctionFooter>

        </AuctionArticle>


    )
}