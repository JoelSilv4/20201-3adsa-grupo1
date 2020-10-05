import React from 'react';
import { ContainerInfo, Title, TitleWrapper, InfoWrapper } from './ContainerKnowMore.style'
import InfoKnowMore from '../../Molecules/InfoKnowMore'
import { ReactComponent as Image } from '../../assets/carro-viagem.svg'

const ContainerKnowMore = ({
    titleColorInfo,
    textTitleInfo,
    textColorInfo,
    textInfo,
    textTitleInfo2,
    textInfo2
}) => (
    <ContainerInfo>
        <TitleWrapper>
            <Title>
                O melhor jeito de planejar e conhecer novos lugares
            </Title>
        </TitleWrapper>
        <InfoWrapper>
            <Image />
            <InfoKnowMore 
                titleColor={titleColorInfo}
                textTitle={textTitleInfo}
                textColor={textColorInfo}
                textInfo={textInfo}
                textTitle2={textTitleInfo2}
                textInfo2={textInfo2}
            />
        </InfoWrapper>
        
    </ContainerInfo>
)

export default ContainerKnowMore;