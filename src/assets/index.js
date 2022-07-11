function importAll(ctx) {
    let images = [];
    ctx.keys().map(img => {
        images.push(
            {
                src: ctx(img),
            }
        );
    });
    
    return images;
};

const dips = importAll(require.context('./RR/dips', false, /\.(gif|jpe?g)$/));
const extensions = importAll(require.context('./RR/extensions', false, /\.(gif|jpe?g)$/));
const hinges = importAll(require.context('./RR/hinges', false, /\.(gif|jpe?g)$/));
const pullups = importAll(require.context('./RR/pullups', false, /\.(gif|jpe?g)$/));
const pushups = importAll(require.context('./RR/pushups', false, /\.(gif|jpe?g)$/));
const rows = importAll(require.context('./RR/rows', false, /\.(gif|jpe?g)$/));
const squats = importAll(require.context('./RR/squats', false, /\.(gif|jpe?g)$/));


export {
    dips,
    extensions,
    hinges,
    pullups,
    pushups,
    rows,
    squats,
}

