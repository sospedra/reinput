export default function pick (target = {}, attributes = []) {
  return attributes.reduce((memo, key) => ({
    ...memo,
    [key]: target[key]
  }), {})
}
