import React from 'react'

export const KakaoIcon = ({ width = 32, height = 32, color = '#FAE100', ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <circle cx="16" cy="16" r="16" fill={color} />
      <rect x="8" y="9" width="16" height="14.7071" fill="url(#pattern0_5909_1724)" />
      <defs>
        <pattern id="pattern0_5909_1724" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_5909_1724" transform="scale(0.010101 0.010989)" />
        </pattern>
        <image
          id="image0_5909_1724"
          width="99"
          height="91"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGMAAABbCAYAAABnEjtVAAAACXBIWXMAAAsSAAALEgHS3X78AAAEw0lEQVR4nO2dy3XqSBCGP3Pu3p4EEBmYJbvLRHCZCKzJgBB0IxhPBIMzwBGM2Gk3kAFSAhdFwCy6hWUMSELdakHXt8Hm0aqj/1RXqx9VD/v9nr4yGQZT4AkYl14Lvl/46ar0d6xf18A2ydK1QRON8tAXMSbDYAxMUTd8DDxbvNwGJU4MxEmWbi1eqzbOxJgMgydghhJgBjw6MUSRooRZJlm6dGVE52JMhkGIuvk/Or1wfXJgiQNhOhFjMgxGwBwIcesBTUmBBbDooiuzKoYOwHP66wVNeAMim6JYEUOLEHF5xHOrWBPFqBi6O4qAF2ON9pefwGuSpTtTDRoTYzIM5ighbikmtCUHQlOBvrUY2hsW3GeXVJd3lCitvGTQ5sd6mLrGbyFADVC2OlZezdViTIbBAvgHv7qlSzwC/06GQXRtA427Kf3kHGN3uuLWeQPmTbutRmLo+aMFIkQdNsC0iSC1xdBCxEi31IRGgtSKGSLE1TwDse7aK6n0DN3QGgja2+YttTzkomeUgrUI0Y5n4LXqS1Xd1CsSrE3xUjXsPdtN6emNvywY5Tu/J1kan/rgpBgSsK2SA6NT8eNcN/WKCGGLR87Ejy9i6O7J97km27ycmsf6JIYePUUdGeQ7X7zj2DPmSPfUFc961vvAIYBrr9giYnRJmmTpqPin7BkhIkTXBOXYURZj3r0tAqX7/rDf74vniv8cGuQ7vyVZuis8I3RpicAMPrqpmUNDhEIMvbtDZmXd8gOUZ0zd2iGAmg8cACPXhggATMUz+sPTAHU8S3DPdICs5PWGVts7BbOIGP3hu4jRI0SM/rARMfrDboA60Sn0gAFqdU9wz1bE6A/bAWpTs+CeeMBH1hnBLeuBTvmTu7bEczblZdfYpSUCS/h46HOW1kcA9P0vb2LbIfumXHDYyFZ+AhfvcMNhz21ZjKh7O7wnRx3lBkpi6JQ9b93b4zWfsvIcTxRG3driNTlHxwI+iSHe0SnR8VGyL2f65GhAJ2ySLB0fv/llPUOrFXZhkceEp948ubikM4u927TGY36eyzp9aaUvRBaeTLNKsjQ69+FZMXR3NUMmEU2RUrHb/+IauHan0KBBvpIDs1aJXOAQP/40ZZWH5KiMOpWLeLV2hyRZukAEuYbaQkCDfVMiSGMaCQENN7FpQf5AgnoVjYWAK5MM69OxS+T42SkaJ4osuGpHoVZ8jDwYHvPGlUKAmfTbPuZAP8ZITnQjiek9z4duJA86mC/ZEOJP4rAUJUJsqkHjxUz0FPyc+02XlKNW6CLTDVsr83OHOdOLlTmjBUzK2K651I8igO1IUQOUpS0RCr7ZarhtLQnHFOXhFiZjQhXWxOD2Dvs7q89XYFOMvmfqyfkoKbrsQ81XW6XhnoBfhporiua2eYZZATvUze9twV1bnjE10MbJcbx+wBzV+P3adsA1TV/F+JsT+4rgsLdr27L9XmJLjGvjhfGn2lvC+DnwFpnd3oGxr0KAHc+YNvy+0SqQt4yNDAnTBt99R5Uv8F4IsOMZdeKFeMMJjIqhl2OrZmpX1NhD5COmPWN64bMcNVytLATlK12JsUJ1S1vD17srbIsh3tAA02KU48UGFRu2hq9xt5gWY4OaN7KyLHnv/A8Z2O3zc/XfbQAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
  )
}
export const KakaoDisabledIcon = ({ width = 32, height = 32, color = '#D5D5D7', ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <circle cx="16" cy="16" r="16" fill={color} />
      <rect x="8" y="9" width="16" height="14.7071" fill="url(#pattern0_5909_1708)" />
      <defs>
        <pattern id="pattern0_5909_1708" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_5909_1708" transform="scale(0.010101 0.010989)" />
        </pattern>
        <image
          id="image0_5909_1708"
          width="99"
          height="91"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGMAAABbCAYAAABnEjtVAAAACXBIWXMAAAsSAAALEgHS3X78AAAEkElEQVR4nO2d7ZGbSBCGn6Xuv8nAXASrDMxFYDuC24vAexl4M/BmwGagjcBSBJYiOBTBSRGsfzSSEZaAgWkYQT9VlKr0MVC8enu+eoa7t7c3AiUGFsURl14BPrT4/bp43QMbIC+OTfFecNwFJEZaHIvi9Z3iuXaIKKvi2CieqzVjipEgN/0T8HGsiyg4IKIsi2MU5wwtRozc/EfgfsgTO/KKiJINedKhxFggAvw9xMk8ckAE+YbUN6poi5ECX2lX4YbOCyLMSusEWmKkTEeEKmvgAQWn+BYjQf49UxShygsSer1V9pGvghAn/Mc8hACp/3JEEC/4cMYCcUPIrSNtvISuvs54BH4wbyFAosEGabZ3pqszYsQNY3fWQuSZjqGrixgx0rybuxvqWCMucarcXcVYIEJojhtNhS3SxG8tiEudYUK4cY/cr7jheyfaimFCdMNJkDZhKkFaCiZEd1qFrCZnxMjopQnRj3vkPtbSJEaGtZp88QEZ/b1KnRiPWD/CN1+o6RheqzMWSM/a8M8BqYd/qz+uOSNTvJi5844r9/eSGKFPiU6Bj0jr6oxqmIqRkUdrPemzQ8LViaozHjEhhuI9Mux+ouwMc8XwnLmj7AxzxfC8p9TULYvxMPilGFC678cwlQLfR7oYA/4E8qMzek0XGr35BL/ClIkxLilImEqQFBtjXO4iLvQEjVFII2RQ0BifhYkRDnGEw4S5oUoaYSO0weAz8dnoyd1bQCss5445IyBMjHDYmhjhsI+QCQ4jACIGWFJrtGJjYoTDPiKQfTMMVhGKi8wNJzZHZxzGvpKZs6UIU9AiXd1QZQm/On0mxrgs4TyJbY/lTY3BlmJOqdwDz0a5FOO0gKbsjARLTBias7UaZWfkyE4xxnB8o7RoprokIMHcMRS/rWCqjtrmyN4Xhj5fqSwlu7Smz5YG6HNqQZW5NJ+xxzLStXm49Oa1yaUlVplr8cSVwdm67SpsKyP/rKlJp62bdj2GKxtE9MOWhmz/Nhu52AL9/hwQR9TOHbVJSNgA/3i4oLnSSghon6qTYYJ0obUQ4JY3lWGCuOAkBHTbMNJ2ZWtmh1TWTvkFXZLYNoji2w6/nQNr5A/rnOjRNaPwKMhrx99PlWccd+ws42P77QdkKHjOYeuAhKVVn0J85NpmiC3XDd+bKi/IUPiqb0G+Ep9zxJ6fmU/u7hb4C4kMXh7b4DsLfYm45InpDqPskCb+sVXpDc3H/ExtoHGHTAhlWifQfubSFJaorREBMu0T/aFYdqpYtjbHp5BlDJgYrinGrW0Os0PqvBUjZVjO2RnBPVJUq86Igf89lfValJcg28i5suP8AbsrAn3YrpYzUg9lbJE2/KV/bEJlG9IKOTe4IktLjL71xRPSjLxGzg3e7CZCc8YOccPK14XcEhrrwBO6xfZnFHq1t4SGM1LH78/aDWU0nOFSX8zeDWU0mrZtVkAdEDfY8rUSvp2xoFmIV6ReMSEq+K4z0prPzA0N+HZGeuV9c0MLfNcZ1cIOyNMHMp8nmSqaA4VenpE9J3yHqTXSb/gXCVm55/InzU+WvTpLgA2OHQAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
  )
}
