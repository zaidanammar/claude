import ReactLoading, {
  LoadingType,
  LoadingProps as ReactLoadingProps,
} from 'react-loading'

interface LoadingProps extends ReactLoadingProps {
  type?: LoadingType
}

const Loading = ({
  color = '#D0071E',
  width = 80,
  height = 80,
  type = 'spin',
}: LoadingProps) => (
  <ReactLoading type={type} color={color} height={height} width={width} />
)

export default Loading
