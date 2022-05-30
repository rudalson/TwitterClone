import React from 'react';
import { Image } from 'react-native';

export type ProfilePictureProps = {
  image?: string;
  size?: number;
  style?: {};
};

const ProfilePicture = ({ image, size = 50, style }: ProfilePictureProps) => (
  <Image
    source={{ uri: image || '' }}
    style={{ ...style, width: size, height: size, borderRadius: size }}
  />
);

export default ProfilePicture;
