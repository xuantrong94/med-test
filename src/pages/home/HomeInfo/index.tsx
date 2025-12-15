'use client';
import Image from 'next/image';
import styles from './home-info.module.css';
import LazyImage from '@/components/LazyImage';

function HomeInfo() {
  return (
    <div className={styles.container}>
      {/* list 1 */}
      <div className={styles.leftColumn}>
        <div className={styles.infoItem}>
          <LazyImage
            src={'home-info-1.svg'}
            alt='info-1'
            width={40}
            height={40}
            className={styles.infoIcon}
            overrideSrc={'home-info-1.svg'}
          />
          <h3 className={styles.infoTitle}>
            Chủ động đặt lịch khám trong vòng 1 phút{' '}
          </h3>
        </div>
        <div className={styles.infoItem}>
          <LazyImage
            src={'home-info-1.svg'}
            alt='info-1'
            width={40}
            height={40}
            className={styles.infoIcon}
            overrideSrc={'home-info-1.svg'}
          />
          <h3 className={styles.infoTitle}>
            Thay đổi & cập nhật lịch khám bệnh{' '}
          </h3>
        </div>
        <div className={styles.infoItem}>
          <LazyImage
            src={'home-info-3.svg'}
            alt='info-3'
            width={40}
            height={40}
            className={styles.infoIcon}
            overrideSrc={'home-info-3.svg'}
          />
          <h3 className={styles.infoTitle}>Đặt lịch nhắc nhở uống thuốc </h3>
        </div>
      </div>
      <LazyImage
        src={
          'https://resource.medpro.com.vn/static/images/bvmathcm/web/slide.png?t=21084.808919858144'
        }
        alt='info-center'
        width={512}
        height={876}
        className={styles.centerImage}
        overrideSrc={
          'https://resource.medpro.com.vn/static/images/bvmathcm/web/slide.png?t=21084.808919858144'
        }
      />
      {/* list 2 */}
      <div className={styles.rightColumn}>
        <div className={styles.infoItem}>
          <LazyImage
            src={'home-info-4.svg'}
            alt='info-1'
            width={40}
            height={40}
            className={styles.infoIcon}
            overrideSrc={'home-info-4.svg'}
          />
          <h3 className={styles.infoTitle}>Giao diện thân thiện dễ sử dụng</h3>
        </div>
        <div className={styles.infoItem}>
          <LazyImage
            src={'home-info-5.svg'}
            alt='info-5'
            width={40}
            height={40}
            className={styles.infoIcon}
            overrideSrc={'home-info-5.svg'}
          />
          <h3 className={styles.infoTitle}>
            Thanh toán nhanh chóng và tiện lợi{' '}
          </h3>
        </div>
        <div className={styles.infoItem}>
          <LazyImage
            src={'home-info-6.svg'}
            alt='info-6'
            width={40}
            height={40}
            className={styles.infoIcon}
            overrideSrc={'home-info-6.svg'}
          />
          <h3 className={styles.infoTitle}>
            Lưu trữ và theo dõi hồ sơ sức khỏe của chính bạn{' '}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default HomeInfo;
