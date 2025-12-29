import React from "react";
import { cardStyles as styles } from "../styles/cardStyles";

type CardProps = {
  image: string;
  title: string;
  author: string;
  time?: string;
  views?: number;
  onAction?: () => void;
  actionLabel?: string;
};

const Card: React.FC<CardProps> = ({
  image,
  title,
  author,
  time,
  views,
  onAction,
  actionLabel,
}) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.image} />

      <div style={styles.leftText}>
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.author}>{author}</p>
      </div>

      {(time || views !== undefined) && (
        <div style={styles.infoRow}>
          {time && (
            <div style={styles.infoItem}>
              <span style={styles.icon}>⏰</span> {time}
            </div>
          )}

          {views !== undefined && (
            <div style={{ ...styles.infoItem, justifyContent: "flex-end" }}>
              <span style={styles.icon}>👤</span> {views}
            </div>
          )}
        </div>
      )}

      {actionLabel && (
        <div style={styles.actionContainer}>
          <p style={styles.actionText} onClick={onAction}>
            {actionLabel}
          </p>
        </div>
      )}
    </div>
  );
};

export default Card;
