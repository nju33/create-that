import { extendPartialBy } from '@nju33/create-__helpers'

export const configAroundTailwindcss = {
  dependencies: ['prettier-plugin-tailwind'],
  settings: {
    twPluginsOrder:
      'container,position,zIndex,inset,display,flex,flexDirection,flexGrow,flexShrink,flexWrap,gap,gridAutoFlow,gridColumn,gridColumnEnd,gridColumnStart,gridRow,gridRowEnd,gridRowStart,gridTemplateColumns,gridTemplateRows,alignContent,alignItems,alignSelf,justifyContent,justifyItems,justifySelf,verticalAlign,placeContent,placeItems,placeSelf,float,clear,order,tableLayout,margin,padding,width,minWidth,maxWidth,height,maxHeight,minHeight,textAlign,textColor,textDecoration,textOpacity,wordBreak,whitespace,fontFamily,fontSize,fontSmoothing,fontStyle,fontVariantNumeric,fontWeight,letterSpacing,lineHeight,backgroundColor,backgroundImage,backgroundSize,backgroundPosition,backgroundRepeat,backgroundAttachment,backgroundClip,backgroundOpacity,borderWidth,borderStyle,borderColor,borderOpacity,borderRadius,borderCollapse,placeholderColor,placeholderOpacity,outline,fill,stroke,strokeWidth,boxShadow,gradientColorStops,opacity,visibility,accessibility,appearance,boxSizing,cursor,pointerEvents,userSelect,divideColor,divideOpacity,divideStyle,divideWidth,listStylePosition,listStyleType,objectFit,objectPosition,overflow,overscrollBehavior,transform,transformOrigin,translate,textTransform,resize,rotate,scale,skew,space,animation,transitionProperty,transitionDuration,transitionDelay,transitionTimingFunction,preflight'
  }
}

export const useTailwindcss = extendPartialBy(configAroundTailwindcss)
