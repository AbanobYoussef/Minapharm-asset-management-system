using DTOs;
using DTOs.Command;
using Microsoft.Extensions.DependencyInjection;
using Services.IService;
using Services.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Command_Services
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddServices(this IServiceCollection services)
        {

            //add auto maper 
            services.AddAutoMapper(typeof(MappingProfile));

            

            services.AddScoped<IGenericService<EmployeeDTO>, EmployeeService>();
            services.AddScoped<IGenericService<DeviceAssetDTO>, DeviceAssetService>();
            services.AddScoped<IGenericService<TransportAssetDTO>, EmployeeService>();
            return services;
        }
    }
}
