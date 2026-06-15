function hexToRgb(hex: string): [number, number, number] {
  hex = hex.replace('#', '');
  if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
  return [
    parseInt(hex.slice(0, 2), 16),
    parseInt(hex.slice(2, 4), 16),
    parseInt(hex.slice(4, 6), 16),
  ];
}
 
function linearize(v: number): number {
  v /= 255;
  return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
}
 
function getLuminance(r: number, g: number, b: number): number {
  return 0.2126 * linearize(r) + 0.7152 * linearize(g) + 0.0722 * linearize(b);
}
 
function getContrastRatio(l1: number, l2: number): number {
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}
 
interface ContrastResult {
  textColor: '#000000' | '#ffffff';
  contrastRatio: number;
  isReadable: boolean; 
}
 
export function useContrastText(background: string): ContrastResult {
  const [r, g, b] = hexToRgb(background);
  const bgLuminance = getLuminance(r, g, b);
 
  const whiteLuminance = 1;
  const blackLuminance = 0;
 
  const whiteContrast = getContrastRatio(bgLuminance, whiteLuminance);
  const blackContrast = getContrastRatio(bgLuminance, blackLuminance);
 
  const textColor = whiteContrast >= blackContrast ? '#ffffff' : '#000000';
  const contrastRatio = Math.max(whiteContrast, blackContrast);
 
  return {
    textColor,
    contrastRatio: Math.round(contrastRatio * 10) / 10,
    isReadable: contrastRatio >= 4.5,
  };
}
