import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// COMPONENTS
import BackgroundImage from '../../UI/atoms/BackgroundImage';
import P from '../../UI/atoms/P';
import ArticleContent from '../../UI/molecules/ArticleContent';

// STYLES
import {
    HomePageContainer,
    ImgContent,
} from './HomePage.styled';

// ASSETS
import HeaderBackground from '../../../assets/header.png';
import PlaystationGame from '../../../assets/ad.jpg';
import KyloRenImg from '../../../assets/kiloren.png';
import R2D2_C3PO from '../../../assets/r2d2_c3p0.jpg';
import StormTrooperArmy from '../../../assets/stormtroopers.jpg';

const HomePage = () => (
    <HomePageContainer>
        <BackgroundImage backgroundImage={HeaderBackground} />

        <ArticleContent>
        <Container>
            <Row>
                <Col sm={6}>
                    <h5>Star Wars, The Force Awakens</h5>

                    <P size="L">
                        Plus de 30 ans après la bataille d'Endor, la galaxie n'en a pas fini 
                        avec la tyrannie et l’oppression. Les membres de l'Alliance rebelle, 
                        devenus la « Résistance », combattent les vestiges de l'Empire réunis 
                        sous la bannière du « Premier Ordre ».
                    </P>

                    <P size="L">
                        Un mystérieux guerrier, Kylo Ren, semble vouer un culte à Dark Vador et 
                        pourchasse les ennemis du Premier Ordre à travers la galaxie. Au même moment, 
                        une jeune femme nommée Rey, pilleuse d'épaves sur la planète désertique Jakku, 
                        va faire la rencontre de Finn, un Stormtrooper en fuite, une rencontre qui 
                        bouleversera sa vie.
                    </P>

                    <P size="L">
                        Plus de 30 ans après la bataille d'Endor, la galaxie n'en a pas fini avec 
                        la tyrannie et l’oppression. Les membres de l'Alliance rebelle, devenus la 
                        « Résistance », combattent les vestiges de l'Empire réunis sous la bannière 
                        du « Premier Ordre ».
                    </P>

                    <P size="L">
                        Un mystérieux guerrier, <u>Kylo Ren</u>, semble vouer un culte à <u>Dark Vador</u> et 
                        pourchasse les ennemis du Premier Ordre à travers la galaxie. Au même moment, 
                        une jeune femme nommée Rey, pilleuse d'épaves sur la planète désertique Jakku, 
                        va faire la rencontre de Finn, un <u>Stormtrooper</u> en fuite, une rencontre qui 
                        bouleversera sa vie.
                    </P>

                    <P size="L">
                        Plus de 30 ans après la bataille d'Endor, la galaxie n'en a pas fini avec la 
                        tyrannie et l’oppression. Les membres de l'Alliance rebelle, devenus la 
                        « <u>Résistance</u> », combattent les vestiges de l'Empire réunis sous la bannière 
                        du « <u>Premier Ordre</u> ».
                    </P>

                    <P size="L">
                        Un mystérieux guerrier, Kylo Ren, semble vouer un culte à <u>Dark Vador</u> et 
                        pourchasse les ennemis du Premier Ordre à travers la galaxie. Au même moment, 
                        une jeune femme nommée Rey, pilleuse d'épaves sur la planète désertique Jakku, 
                        va faire la rencontre de Finn, un Stormtrooper en fuite, une rencontre qui 
                        bouleversera sa vie.
                    </P>
                </Col>

                <Col sm={6}>
                    <ImgContent>
                        <img src={PlaystationGame} alt="Battlefront PS4" />
                    </ImgContent>
                </Col>
            </Row>
            </Container>
        </ArticleContent>

        <BackgroundImage backgroundImage={KyloRenImg} />

        <ArticleContent>
            <h3>A long time ago, in a galaxy far, far away…</h3>

            <Container className="article-2">
                <Row>
                    <Col md={5}>
                        <img src={R2D2_C3PO} alt="R2D2_C3PO" />
                    </Col>

                    <Col md={7}>
                        <P size="M">
                            <b><i>La Guerre des étoiles</i></b> (titre original <b><i>Star Wars</i></b>, soit
                            littéralement <i>Guerres Stellaires</i> ) est une épopée cinématographique de science-fiction créée 
                            par George Lucas, considérée comme un élément phare du space opera. Prévue à la 
                            base pour être une suite de trois trilogies (triptyque), Lucas fut contraint, 
                            par manque de moyens techniques, de commencer par la seconde trilogie 
                            (<b><i>l'Épisode IV - Un nouvel espoir</i></b>) en 1977. La série connut un succès phénoménal 
                            partout dans le monde et engendra une très importante communauté de fans.
                            Sans prétendre expliquer le succès du premier film (s'il y avait une recette, 
                            cela se saurait), on peut, toutefois, noter que, malgré le manque de moyens 
                            (le budget était relativement modeste, les acteurs presque inconnus) :
                        </P>
                    </Col>
                </Row>

                <ul>
                    <li>
                        <P size="M">
                            Il fait appel à des références connues et appréciées des jeunes de l'époque : films 
                            de cape et d'épée, westerns, péplums, contes de fées et même <b><i>le Seigneur des 
                            Anneaux</i></b> de J.R.R. Tolkien ; cette œuvre n'apparaît pas comme de la science-fiction 
                            au sens strict mais plutôt comme du space fantasy.
                        </P>
                    </li>
                    <li>
                        <P size="M">
                            Les effets spéciaux, supervisés par Ken Ralston, étaient réellement novateurs, avec 
                            notamment la participation de John Dykstra (qui a également participé au premier film 
                            de <b><i>Star Trek</i></b>), qui avait développé une nouvelle manière d'animer les 
                            maquettes des vaisseaux en coordonnant leurs mouvements par ordinateur (Dykstraflex).
                        </P>
                    </li>
                    <li>
                        <P size="M">
                            Le film a développé un univers cohérent, avec, comme préoccupation constante, autant 
                            la création d'une ambiance que l'action proprement dite.
                        </P>
                    </li>
                    <li>
                        <P size="M">
                            La musique, composée par John Williams, introduit des thèmes récurrents et des 
                            leitmotivs (procédé classique mais renforçant la cohérence).
                        </P>
                    </li>
                </ul>
            </Container>
        </ArticleContent>

        <BackgroundImage backgroundImage={StormTrooperArmy} size="17" />
    </HomePageContainer>
)

export default HomePage;
