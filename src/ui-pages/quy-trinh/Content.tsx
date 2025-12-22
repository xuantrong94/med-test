import Step from './Step';
import { Partner } from '@/shared/constants/partners';

const GioiThieuContent = ({ partner }: { partner: Partner }) => {
  return (
    <section>
      {partner.process.map(step => (
        <Step
          key={step.step}
          {...step}
        />
      ))}
    </section>
  );
};

export default GioiThieuContent;
