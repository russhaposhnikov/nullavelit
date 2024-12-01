const SCALE_BINDINGS_CONTINUOUS = 'Scale bindings are currently only supported for scales with unbinned, continuous domains.';

// Example function or code that checks scale bindings
function checkScaleBindings(scale) {
    if (!scale.isContinuous || scale.isBinned) {
        throw new Error(SCALE_BINDINGS_CONTINUOUS);
    }
    // Continue with scale bindings logic
}
