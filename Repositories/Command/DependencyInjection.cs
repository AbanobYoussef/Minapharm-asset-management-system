using Entities.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Repositories.IGenericRepository;
using Repositories.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositories.Command
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddRepositories(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<AssetsContext>(options => options.UseSqlServer(configuration.GetConnectionString("dbCS")));


            services.AddScoped(typeof(IUnitOfWork<>), typeof(UnitOfWork<>));


            return services;
        }

    }
}
