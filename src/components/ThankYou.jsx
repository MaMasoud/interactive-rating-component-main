import thankYou from '../assets/images/illustration-thank-you.svg';
import Box from './Box';

export default function ThankYou({ rating }) {
    return (
        <Box className="think-you">
            <img src={thankYou} alt="thank you" />
            <div className="messege">You selected {rating} out of 5</div>
            <h1>Thank you!</h1>
            <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
        </Box>
    )
}
