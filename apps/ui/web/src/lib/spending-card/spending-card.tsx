import './spending-card.styles.scss'
import {ISpendingCard, SPENDING_CATEGORY} from "@shared-types";
import {moneyFormatter} from "@sprintform/utils";

export const SpendingCard = ({title, amount, icon, currency, paid}: Partial<ISpendingCard>) => {
    return <div className={'sprintform-spending-card'}>
        <div className={'sprintform-spending-card__icon'}>
            <img src={icon} alt=""/>
        </div>
        <div className={'sprintform-spending-card__title'}>
            <h2>{title}</h2>
            <p>{new Date(paid || 0).toDateString()}</p>
        </div>
        <div className={'sprintform-spending-card__amount'}>
            {moneyFormatter({
                value: amount,
                currency: currency,
                locale: 'hu-hu',
            })}
        </div>
    </div>
}
