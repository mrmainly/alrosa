import React from 'react'

import { MyContainer } from '../../components'
// import { FormFeedBack, PageHeaderText } from '../../constructor'

import FaqQuestionScreen from './components/FaqQuestionsScreen'
import FaqPageHeader from './components/FaqPageHeader'

const Faq = () => {
    return (
        <MyContainer wrapper={false}>
            <FaqPageHeader />
            {/* <PageHeaderText
                showLine={true}
                titleSize="h2"
                title={<FormattedMessage id={'question_answers_menu'} />}
                description={<FormattedMessage id={'faq_description'} />}
                tag="РУБРИКА"
            /> */}
            <FaqQuestionScreen />
            {/* <FormFeedBack /> */}
        </MyContainer>
    )
}

export default Faq