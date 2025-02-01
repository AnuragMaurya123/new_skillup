import { animation } from '@/constants';
import styled from 'styled-components';
import Button from '../Button';
import ShinyButton from '@/components/magicui/shiny-button';

export default function SmallScreenAnimation() {
  return (
   <div className="">
     <StyledWrapper>
          <div className="card">
            <div className="messages">
              {
                animation.map((card,i)=>(
                <div className="message " key={i}>
                <div className="flex items-center gap-2 w-full">
                <img src={card.image} alt={card.image} className="message-icon" />
                <div className="message-info">
                  <div className="message-header">
                    <div className="message-title">{card.title}</div>
                  </div>
                  <div className="message-content">{card.position}</div>
                </div>
                </div>
                <img src={card.image2} alt={card.image2} className="w-22 h-6" />
              </div>
                ))
              }
       
            </div>
            <div className="flex items-center gap-2 my-6 w-full">
              <Button text="Enroll Now" classname="py-3 px-6 lg:px-8 lg:py-3  w-full text-white" />
              <ShinyButton className="border rounded-md  w-full flex justify-center">
                <span className="text-xs text-black font-semibold ">
                  Get Free Career Evaluation
                </span>
              </ShinyButton>
            </div>
          </div>
        </StyledWrapper>
        
   </div>
  )
}

const StyledWrapper = styled.div`
  .card {
    width: 100%;
    height: auto;
    background: #fff;
    box-shadow: 0px 1px 32px 8px rgba(0, 0, 0, 0.05);
    border-radius: 0.875rem;
    padding: 1.5rem;
    -webkit-user-drag: none;
    font-family:
      ui-sans-serif,
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      Segoe UI,
      Roboto,
      Noto Sans,
      Ubuntu,
      Cantarell,
      Helvetica Neue,
      Arial,
      sans-serif,
      Apple Color Emoji,
      Segoe UI Emoji,
      Segoe UI Symbol,
      Noto Color emoji;
    overflow: hidden;
    --delay: 500ms;
  }

  .messages {
    width: 100%;
  }

  .message {
    width: 100%;
    border: 1.5px solid rgba(0, 0, 0, 0.08);
    border-radius: 0.5rem;
    padding: 1rem 1.25rem;
    display: flex;
    gap: 1rem;
    transform: scale(0);
    height: 0;
    box-shadow: 0px 4px 16px 8px rgba(0, 0, 0, 0.03);
    animation: show-message 200ms forwards;
    transform-origin: top center;
    visibility: hidden;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  .message:hover {
    box-shadow: 0px 3px 16px 8px rgba(0, 0, 0, 0.07);
    transform: translateY(-2px) scale(1.1);
  }

  .message-icon {
    width: 2.5rem;
    height: 2.5rem;
    min-width: 2.5rem;
    min-height: 2.5rem;
    border-radius: 1rem;
  }

  .message:nth-child(1) {
    animation-delay: calc(4 * var(--delay));
  }

  .message:nth-child(2) {
    animation-delay: calc(3 * var(--delay));
  }

  .message:nth-child(3) {
    animation-delay: calc(2 * var(--delay));
  }

  .message:nth-child(4) {
    animation-delay: var(--delay);
  }

 

  .message-info {
    display: flex;
    flex-direction: column;
  }

  .message-header {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    line-height: 1;
    user-select: none;
    -webkit-user-select: none;
  }

  .message-title {
    font-size: 1rem;
    font-weight: 600;
  }

  .message-time {
    font-size: 0.875rem;
    color: #454545;
  }

  .message-time::before {
    content: "•";
    margin: 0 0.25rem;
    font-size: 0.875rem;
    color: #454545;
  }

  .message-content {
    margin-top: 0.5rem;
    line-height: 1;
    text-overflow: ellipsis;
    white-space: wrap;
    font-weight: 300;
  }

  @keyframes show-message {
    0% {
      transform: scale(0);
      margin-bottom: 0;
      visibility: visible;
    }
    100% {
      transform: scale(1);
      height: 100%;
      margin-bottom: 1rem;
      visibility: visible;
    }
  }`;
