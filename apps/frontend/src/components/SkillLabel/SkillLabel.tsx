import { variant } from './libs/enums';
import { type variantType } from './libs/types';

type Properties = {
  skillName: string;
};

const SkillLabel = ({ skillName }: Properties) => {
  const getVariant = (label: string): string => {
    const colorKeys = Object.keys(variant);
    const keyColor = colorKeys.find((key) =>
      key.toLowerCase().includes(label.toLowerCase()),
    ) as variantType;
    return keyColor ? variant[keyColor] : variant.DEFAULT;
  };

  return (
    <span
      className={`${getVariant(skillName)} text-white px-3 py-1 rounded-full`}
    >
      {skillName}
    </span>
  );
};

export { SkillLabel };
