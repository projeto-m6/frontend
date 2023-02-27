import { Announcement } from '../../contexts/announcement';
import { B2400, B2500, H6600 } from '../../styles/typography';
import { Avatar } from '../Avatar';
import { WriteComment } from '../WriteComment';
import { Container } from './styles';

interface CommentsProps {
  announcement: Announcement | null;
}

export const Comments = ({ announcement }: CommentsProps) => {
  function monthDiff(dateFrom: Date, dateTo: Date) {
    return (
      dateTo.getMonth() - dateFrom.getMonth() + 12 * (dateTo.getFullYear() - dateFrom.getFullYear())
    );
  }

  const publishingTime = (date: string) => {
    const now = new Date();
    const publicationDate = new Date(date);
    const timeInMilliseconds = Math.abs(publicationDate.getTime() - now.getTime());
    const diffSec = Math.ceil(timeInMilliseconds / 1000);
    const diffMin = Math.ceil(timeInMilliseconds / (1000 * 60));
    const diffHour = Math.ceil(timeInMilliseconds / (1000 * 60 * 60));
    const diffDays = Math.ceil(timeInMilliseconds / (1000 * 60 * 60 * 24));
    const diffMonths = Math.abs(monthDiff(publicationDate, now));
    const diffYear = Math.abs(publicationDate.getFullYear() - now.getFullYear());

    if (diffSec < 60) {
      return 'agora';
    } else if (diffMin < 60) {
      return `há ${diffMin} ${diffMin === 1 ? 'minuto' : 'minutos'} atrás`;
    } else if (diffHour < 24) {
      return `há ${diffHour} ${diffHour === 1 ? 'hora' : 'horas'} atrás`;
    } else if (diffMonths < 1) {
      return `há ${diffDays} ${diffDays === 1 ? 'dia' : 'dias'} atrás`;
    } else if (diffYear < 1) {
      return `há ${diffMonths} ${diffMonths === 1 ? 'mês' : 'meses'} atrás`;
    } else if (diffYear >= 1) {
      return `há ${diffYear} ${diffYear === 1 ? 'ano' : 'anos'} atrás`;
    }
  };

  return (
    <Container>
      <div className="comments">
        <H6600>Comentários</H6600>
        <ul>
          {announcement && announcement.comments.length > 0
            ? announcement.comments.map((comment) => (
                <li key={comment.id}>
                  <div>
                    <Avatar username={comment.user.name} />
                    <B2500>{comment.user.name}</B2500>
                    <span className="time">{publishingTime(comment.created_at)}</span>
                  </div>
                  <B2400>{comment.comment}</B2400>
                </li>
              ))
            : 'Seja o primeiro a comentar'}
        </ul>
      </div>
      <WriteComment />
    </Container>
  );
};
