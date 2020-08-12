import React from 'react'
import Styles from './survey-item-styles.scss'
import { IconName, Icon } from '@/presentation/components'

const SurveyItem: React.FC = () => {
  return (
    <li className={Styles.surveyItemWrap}>
      <div className={Styles.surveyContent}>
        <Icon className={Styles.iconWrap} iconName={IconName.thumbDown} />
        <time>
          <span className={Styles.day}>22</span>
          <span className={Styles.mont}>10</span>
          <span className={Styles.year}>2020</span>
        </time>
        <p>Qual é seu framework favorito?</p>
      </div>
      <footer>Ver Resultado</footer>
    </li>
  )
}

export default SurveyItem
