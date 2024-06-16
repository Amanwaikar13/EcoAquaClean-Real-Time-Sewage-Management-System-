import matplotlib.pyplot as plt
from collections import deque
import random
import time

class Sensor:
    def __init__(self, location):
        self.location = location

    def measure(self):
        water_level = random.uniform(0, 100)
        gas_composition = random.uniform(0, 1)
        solid_waste_content = random.uniform(0, 10)

        return {
            'location': self.location,
            'water_level': water_level,
            'gas_composition': gas_composition,
            'solid_waste_content': solid_waste_content
        }

# Initialize sensors
sensor1 = Sensor("Sewage Line 1")
sensor2 = Sensor("Sewage Line 2")

# Create fixed-length deques to store the data points for each parameter
water_data = deque(maxlen=50)
waste_data = deque(maxlen=50)
gas_data = deque(maxlen=50)

# Create three empty plots for water level, waste level, and gas level
fig, axs = plt.subplots(3, 1, figsize=(10, 10))

# Set initial x-axis limits
x_min, x_max = 0, 50
for ax in axs:
    ax.set_xlim(x_min, x_max)
    ax.set_ylim(0, 100)

# Start measuring and updating plots
for i in range(5000):
    # Measure data from sensors
    data1 = sensor1.measure()
    data2 = sensor2.measure()

    # Append data points to deques
    water_data.append(data1['water_level'])
    waste_data.append(data1['solid_waste_content'])
    gas_data.append(data1['gas_composition'])

    # Clear the previous plot and plot only the latest data point for each parameter
    for ax, data, label in zip(axs, [water_data, waste_data, gas_data], ['Water Level', 'Waste Level', 'Gas Level']):
        ax.clear()
        ax.plot(range(i - len(data) + 1, i + 1), data, label=label)
        ax.legend(loc='upper right')

        # Update x-axis limits dynamically
        ax.set_xlim(max(0, i - 49), i)

    # Pause for a short time before updating the plots
    plt.pause(0.01)

plt.tight_layout()
plt.show()
