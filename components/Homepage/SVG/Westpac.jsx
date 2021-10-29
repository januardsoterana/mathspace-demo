// @flow
import React from 'react';

type Props = {
  width?: number,
  height?: number,
  mono?: boolean,
  reversed?: boolean,
  hasTagline?: boolean,
};

const Westpac200Icon = ({
  width = 129,
  height = 46,
  mono = false,
  reversed = false,
  hasTagline = true,
}: Props) => {
  let primaryColor = '#D5002B';
  let secondaryColor = '#3C3C3C';
  if (mono) {
    primaryColor = '#363734';
    secondaryColor = '#363734';
  }
  if (reversed) {
    primaryColor = '#FFFFFF';
    secondaryColor = '#FFFFFF';
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 129 ${hasTagline ? 46 : 35}`}
    >
      <g fill="none" fillRule="evenodd">
        <path
          fill={primaryColor}
          d="M93.893 25.761L88.561 9.237C87.81 6.712 86.53 6 84.577 6h-9.899c.778.32 1.293 2.324 1.293 2.324l4.777 16.595c.554 2.083 2.276 3.18 4.23 3.18H95.47c-.753-.136-1.577-2.337-1.577-2.337M109.696 25.761l5.33-16.524C115.78 6.712 117.058 6 119.01 6h9.898c-.776.32-1.29 2.324-1.29 2.324l-4.78 16.595c-.553 2.083-2.276 3.18-4.229 3.18H108.12c.753-.136 1.577-2.337 1.577-2.337M95.994 28.098h11.647V6.13H95.994zM14.536 24.594H5.129l4.417-3.76c.5-.434 1.775-1.562 2.692-2.389-.048-.457-.075-.92-.075-1.39 0-2.784.845-5.348 2.258-7.386-1.161-2.262-3.748-3.69-6.635-3.69-5.807 0-8.048 4.472-7.297 5.418l2.029 1.817c-.125-.361 1.055-4.042 4.994-4.042h.36c1.599 0 3.977 1.011 3.977 3.35 0 1.801-1.214 3.062-4.336 5.863 0 0-6.66 5.485-7.513 6.268v3.19h18.104l-.01-.031c-1.39-.775-2.6-1.881-3.558-3.218"
        />

        <path
          fill={secondaryColor}
          d="M62.732 34.096a.566.566 0 0 1-.567-.566V.567a.567.567 0 1 1 1.133 0V33.53a.566.566 0 0 1-.566.566z"
        />

        <path
          fill={primaryColor}
          d="M40.992 5.941c-3.774.002-6.71 1.675-8.618 4.801.692 1.242 1.236 2.674 1.631 4.282.432-1.4 1.01-2.566 1.737-3.467 1.278-1.588 2.996-2.36 5.25-2.361 3.567-.001 6.47 3.52 6.471 7.847.001 4.329-2.9 7.85-6.465 7.852-2.252 0-3.97-.775-5.25-2.371-1.088-1.354-1.854-3.282-2.276-5.73l-.013-.07C32.24 9.771 28.446 5.944 22.771 5.946c-5.362.002-9.721 4.985-9.72 11.108.002 6.122 4.366 11.102 9.726 11.1 3.739 0 6.658-1.673 8.564-4.808-.693-1.245-1.238-2.68-1.631-4.301-.43 1.392-.998 2.554-1.71 3.455-1.273 1.614-2.982 2.399-5.223 2.4-3.567 0-6.469-3.52-6.47-7.848-.002-4.328 2.898-7.85 6.465-7.851 6.086-.002 7.143 6.125 7.49 8.139l.013.07C31.491 24.338 35.297 28.15 41 28.15c5.361-.002 9.721-4.985 9.719-11.108-.002-6.123-4.365-11.103-9.726-11.1"
        />

        {hasTagline && (
          <path
            fill={secondaryColor}
            d="M1.559 43.759l1.472-1.206c.55-.455.764-.695.764-1.062 0-.372-.246-.575-.594-.575-.341 0-.574.19-.903.594l-.682-.55c.435-.593.859-.915 1.648-.915.916 0 1.523.537 1.523 1.364v.013c0 .739-.38 1.105-1.163 1.712l-.72.555h1.927v.84H1.559v-.77zM7.984 42.331v-.012c0-.802-.392-1.409-.973-1.409s-.96.587-.96 1.396v.013c0 .808.385 1.409.973 1.409.587 0 .96-.594.96-1.397m-2.932 0v-.012c0-1.283.797-2.287 1.972-2.287 1.168 0 1.958.992 1.958 2.274v.013c0 1.282-.79 2.287-1.971 2.287s-1.959-.992-1.959-2.275M12.248 42.331v-.012c0-.802-.391-1.409-.972-1.409-.582 0-.96.587-.96 1.396v.013c0 .808.385 1.409.972 1.409s.96-.594.96-1.397m-2.931 0v-.012c0-1.283.796-2.287 1.971-2.287 1.169 0 1.958.992 1.958 2.274v.013c0 1.282-.79 2.287-1.97 2.287-1.182 0-1.96-.992-1.96-2.275M15.237 45.326l.322-.695a.87.87 0 0 0 .41.133c.165 0 .253-.05.336-.221l-1.327-3.4h1.017l.77 2.307.74-2.306h.998l-1.301 3.468c-.26.689-.537.947-1.112.947-.348 0-.607-.088-.853-.233M20.916 42.571c-.056-.43-.309-.72-.713-.72-.399 0-.657.285-.733.72h1.446zm-2.388.285v-.013c0-.966.689-1.762 1.675-1.762 1.13 0 1.648.878 1.648 1.838 0 .076-.006.164-.012.253h-2.356c.094.435.397.663.827.663.322 0 .556-.101.821-.348l.55.487c-.316.392-.771.632-1.384.632-1.017 0-1.769-.714-1.769-1.75zM24.41 43.336v-.17a1.486 1.486 0 0 0-.613-.127c-.41 0-.663.164-.663.467v.013c0 .259.215.41.525.41.448 0 .751-.246.751-.593m-2.204.22v-.012c0-.739.562-1.08 1.364-1.08a2.4 2.4 0 0 1 .828.14v-.058c0-.398-.247-.619-.727-.619-.366 0-.625.07-.935.183l-.24-.732a2.987 2.987 0 0 1 1.314-.272c.524 0 .904.139 1.144.379.252.253.366.625.366 1.08v1.965h-.929v-.366c-.233.258-.555.429-1.023.429-.638 0-1.162-.367-1.162-1.036M25.99 41.144h.96v.682c.196-.468.512-.77 1.08-.745v1.004h-.05c-.638 0-1.03.385-1.03 1.194v1.25h-.96v-3.385zM28.208 44.081l.41-.631c.367.265.752.404 1.068.404.278 0 .404-.101.404-.253v-.013c0-.208-.328-.278-.7-.391-.475-.139-1.012-.36-1.012-1.017v-.013c0-.688.556-1.074 1.238-1.074.43 0 .897.146 1.264.392l-.367.663c-.334-.195-.669-.316-.915-.316-.234 0-.354.101-.354.234v.013c0 .19.322.278.688.404.474.158 1.023.385 1.023 1.004v.013c0 .752-.562 1.093-1.294 1.093a2.371 2.371 0 0 1-1.453-.512M35.82 42.843v-.013c0-.562-.379-.935-.827-.935-.449 0-.821.373-.821.935v.013c0 .562.372.935.82.935.45 0 .828-.366.828-.935zm-2.596-1.7h.96v.487c.234-.315.556-.55 1.055-.55.79 0 1.541.62 1.541 1.75v.013c0 1.13-.739 1.75-1.54 1.75-.512 0-.828-.234-1.056-.505v1.452h-.96v-4.396zM37.268 41.144h.96v.682c.196-.468.512-.77 1.08-.745v1.004h-.05c-.638 0-1.03.385-1.03 1.194v1.25h-.96v-3.385zM42.209 42.856v-.013c0-.499-.36-.935-.891-.935-.55 0-.878.423-.878.922v.013c0 .5.36.935.89.935.55 0 .879-.423.879-.922m-2.717 0v-.013c0-.973.784-1.762 1.839-1.762 1.048 0 1.825.777 1.825 1.75v.012c0 .973-.783 1.763-1.838 1.763-1.049 0-1.826-.778-1.826-1.75M43.668 43.336v-2.192h.96v1.889c0 .454.215.688.582.688.366 0 .6-.234.6-.688v-1.89h.96v3.387h-.96v-.48c-.221.284-.505.543-.992.543-.726 0-1.15-.48-1.15-1.257M49.93 42.843v-.013c0-.562-.374-.935-.822-.935-.449 0-.828.367-.828.935v.013c0 .562.38.935.828.935.448 0 .821-.373.821-.935m-2.609 0v-.013c0-1.13.74-1.75 1.541-1.75.512 0 .828.235 1.055.506V39.92h.96v4.61h-.96v-.486c-.233.316-.555.55-1.055.55-.79 0-1.54-.62-1.54-1.75M51.623 44.53h.96v-4.611h-.96zM53.284 45.326l.323-.695a.87.87 0 0 0 .41.133c.164 0 .253-.05.335-.221l-1.327-3.4h1.017l.771 2.307.74-2.306h.997l-1.301 3.468c-.26.689-.537.947-1.112.947-.348 0-.606-.088-.853-.233M58.433 44.081l.411-.631c.366.265.752.404 1.067.404.279 0 .405-.101.405-.253v-.013c0-.208-.329-.278-.701-.391-.474-.139-1.011-.36-1.011-1.017v-.013c0-.688.556-1.074 1.238-1.074.43 0 .897.146 1.263.392l-.366.663c-.335-.195-.67-.316-.916-.316-.234 0-.354.101-.354.234v.013c0 .19.323.278.689.404.474.158 1.023.385 1.023 1.004v.013c0 .752-.562 1.093-1.295 1.093a2.371 2.371 0 0 1-1.453-.512M61.687 43.336v-2.192h.96v1.889c0 .454.215.688.582.688.366 0 .6-.234.6-.688v-1.89h.96v3.387h-.96v-.48c-.222.284-.506.543-.992.543-.727 0-1.15-.48-1.15-1.257M68.087 42.843v-.013c0-.562-.38-.935-.828-.935-.448 0-.821.373-.821.935v.013c0 .562.373.935.821.935.448 0 .828-.366.828-.935zm-2.597-1.7h.96v.487c.234-.315.557-.55 1.055-.55.79 0 1.542.62 1.542 1.75v.013c0 1.13-.74 1.75-1.542 1.75-.511 0-.827-.234-1.055-.505v1.452h-.96v-4.396zM72.13 42.843v-.013c0-.562-.38-.935-.828-.935-.448 0-.82.373-.82.935v.013c0 .562.372.935.82.935.449 0 .828-.366.828-.935zm-2.596-1.7h.96v.487c.234-.315.556-.55 1.055-.55.79 0 1.541.62 1.541 1.75v.013c0 1.13-.739 1.75-1.541 1.75-.512 0-.828-.234-1.055-.505v1.452h-.96v-4.396zM76.16 42.856v-.013c0-.499-.36-.935-.89-.935-.55 0-.878.423-.878.922v.013c0 .5.36.935.89.935.55 0 .879-.423.879-.922m-2.716 0v-.013c0-.973.783-1.762 1.838-1.762 1.048 0 1.826.777 1.826 1.75v.012c0 .973-.784 1.763-1.839 1.763-1.049 0-1.825-.778-1.825-1.75M77.583 41.144h.96v.682c.196-.468.512-.77 1.08-.745v1.004h-.05c-.638 0-1.03.385-1.03 1.194v1.25h-.96v-3.385zM80.382 43.57v-1.605h-.405v-.821h.405v-.866h.96v.866h.796v.821h-.796v1.447c0 .22.095.328.31.328a.976.976 0 0 0 .473-.12v.77c-.202.12-.436.196-.758.196-.587 0-.985-.233-.985-1.016M82.732 44.53h.96v-3.386h-.96v3.385zm-.025-3.759h1.01v-.852h-1.01v.852zM84.438 41.144h.96v.48c.221-.284.505-.543.992-.543.726 0 1.15.48 1.15 1.257v2.191h-.96v-1.888c0-.455-.215-.689-.582-.689-.366 0-.6.234-.6.689v1.888h-.96v-3.385zM90.673 42.673v-.013c0-.461-.36-.783-.828-.783-.467 0-.82.322-.82.783v.013c0 .467.353.783.82.783.468 0 .828-.322.828-.783m-2.438 2.526l.328-.72c.347.196.695.31 1.144.31.656 0 .966-.316.966-.923v-.164c-.284.341-.594.55-1.105.55-.79 0-1.504-.575-1.504-1.58v-.012c0-1.01.727-1.58 1.504-1.58.524 0 .834.222 1.092.506v-.442h.96v2.621c0 .607-.145 1.049-.429 1.333-.316.316-.802.455-1.46.455-.549 0-1.067-.126-1.496-.354M96.7 42.679l-.587-1.434-.588 1.434H96.7zm-1.023-2.603h.897l1.895 4.454h-1.017l-.404-.992h-1.87l-.404.992h-.992l1.895-4.454zM98.71 43.336v-2.192h.96v1.889c0 .454.215.688.581.688s.6-.234.6-.688v-1.89h.96v3.387h-.96v-.48c-.22.284-.505.543-.992.543-.726 0-1.15-.48-1.15-1.257M102.248 44.081l.41-.631c.367.265.752.404 1.068.404.278 0 .404-.101.404-.253v-.013c0-.208-.328-.278-.7-.391-.474-.139-1.012-.36-1.012-1.017v-.013c0-.688.556-1.074 1.238-1.074.43 0 .898.146 1.264.392l-.366.663c-.335-.195-.67-.316-.916-.316-.234 0-.354.101-.354.234v.013c0 .19.322.278.688.404.474.158 1.024.385 1.024 1.004v.013c0 .752-.562 1.093-1.295 1.093a2.371 2.371 0 0 1-1.453-.512M105.622 43.57v-1.605h-.405v-.821h.405v-.866h.96v.866h.796v.821h-.796v1.447c0 .22.095.328.31.328a.976.976 0 0 0 .473-.12v.77c-.202.12-.436.196-.758.196-.587 0-.985-.233-.985-1.016M107.928 41.144h.96v.682c.196-.468.512-.77 1.08-.745v1.004h-.05c-.638 0-1.03.385-1.03 1.194v1.25h-.96v-3.385zM112.287 43.336v-.17a1.486 1.486 0 0 0-.613-.127c-.41 0-.663.164-.663.467v.013c0 .259.214.41.524.41.448 0 .752-.246.752-.593m-2.205.22v-.012c0-.739.562-1.08 1.364-1.08a2.4 2.4 0 0 1 .828.14v-.058c0-.398-.247-.619-.726-.619-.367 0-.626.07-.935.183l-.24-.732a2.987 2.987 0 0 1 1.313-.272c.525 0 .904.139 1.144.379.253.253.366.625.366 1.08v1.965h-.928v-.366c-.234.258-.556.429-1.024.429-.638 0-1.162-.367-1.162-1.036M113.91 44.53h.96v-4.611h-.96zM115.66 44.53h.96v-3.386h-.96v3.385zm-.024-3.759h1.01v-.852h-1.01v.852zM119.369 43.336v-.17a1.485 1.485 0 0 0-.613-.127c-.41 0-.663.164-.663.467v.013c0 .259.215.41.524.41.449 0 .752-.246.752-.593m-2.205.22v-.012c0-.739.562-1.08 1.365-1.08a2.4 2.4 0 0 1 .827.14v-.058c0-.398-.246-.619-.726-.619-.366 0-.625.07-.935.183l-.24-.732a2.989 2.989 0 0 1 1.314-.272c.524 0 .903.139 1.143.379.253.253.367.625.367 1.08v1.965h-.93v-.366c-.233.258-.555.429-1.022.429-.638 0-1.163-.367-1.163-1.036"
          />
        )}
      </g>
    </svg>
  );
};

export default Westpac200Icon;
