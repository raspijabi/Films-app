import ImageColors from 'react-native-image-colors'


export const getImageColors = async(uri) => {

    const colors = await ImageColors.getColors(uri, {})

    let primary
    let secondary

    if(colors.platform ==='android'){
        primary = colors.dominant
        secondary = colors.average
    }else{
        primary = colors.background
        secondary = colors.primary
    }

    return [primary, secondary]
}