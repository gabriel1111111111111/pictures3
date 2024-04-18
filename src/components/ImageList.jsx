import ImageShow from './ImageShow'

function ImageList({ images }){
    const renderImage = images.map((image) => {
        return <IImageShow key={image.id} image={image}/>
    })
    
    return(
        <div>
            {render Image}
        </div>
    )
}

export default ImageList