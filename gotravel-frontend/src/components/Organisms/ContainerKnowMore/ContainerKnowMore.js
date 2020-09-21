import React from 'react';
import { ContainerInfo, TitleInfo, IconWrapper, DescriptionInfo, DescriptionWrapper } from './ContainerKnowMore.style'
import Button from '../../Atoms/Button'

const ContainerKnowMore = ({
    title, 
    icon, 
    description, 
    backgroundColor, 
    fontColor,
    textButton,
    textColorButton
}) => (
    <ContainerInfo color={backgroundColor}>
        <TitleInfo titleColor={fontColor}>
            {title}
        </TitleInfo>
        <IconWrapper>
            {icon}
        </IconWrapper>
        <DescriptionWrapper>
            <DescriptionInfo titleColor={fontColor}>
                {description}
            </DescriptionInfo>
        </DescriptionWrapper>
        <Button 
            text={textButton}
            textColor={textColorButton}
        />
    </ContainerInfo>
)

export default ContainerKnowMore;