import { useIntl } from 'umi'

export  const intl=(id:string)=>{
    const intl = useIntl();
    return intl.formatMessage({id:id})
}