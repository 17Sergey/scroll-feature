export default function Toolbar() {
    const handlePlayMovie = (event: React.MouseEvent<HTMLButtonElement>) => {
        alert('Playing!');
        event.stopPropagation();
    };
    const handleUploadImage = (event: React.MouseEvent<HTMLButtonElement>) => {
        alert('Uploading!');
        event.stopPropagation();
    };

    return (
        <div
            className="Toolbar"
            onClickCapture={(event: React.MouseEvent<HTMLDivElement>) => {
                alert('You clicked on the ' + event.target);
            }}
            onClick={() => alert('No capture on div')}
        >
            <div>
                <button onClick={handlePlayMovie}>Play Movie</button>
                <button onClick={handleUploadImage}>Upload Image</button>
            </div>
        </div>
    );
}
